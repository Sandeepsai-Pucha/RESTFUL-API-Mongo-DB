const Location = require("./location.model");
const fetch = require('node-fetch');



exports.getAllLocations = () => Location.find().populate("region");
exports.getLocationById = (id) => Location.findById(id).populate("region");
exports.createLocation = (locationData) => Location.create(locationData);
exports.updateLocation = (id, locationData) =>
  Location.findByIdAndUpdate(id, locationData, { new: true });
exports.deleteLocation = (id) => Location.findByIdAndDelete(id);



exports.sendLocation = async (locationData) => {
  try {
    const { latitude, longitude } = locationData;
    const apiKey = "299250ace8954a778bdd2c92753d136c"
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const address = data.results[0].formatted;
      const updatedLocation = await Location.findOneAndUpdate(
        { latitude, longitude },
        { address },
        { new: true, upsert: true }
      );
      console.log(updatedLocation,"updated_location");

      return updatedLocation;
    } else {
      throw new Error('Address not found');
    }
  } catch (error) {
    throw new Error(`Error updating location: ${error.message}`);
  }
};

exports.pickAndDrop = async (locationData) => {
  
  try {
    const { pickLocation, dropLocation } = locationData;

    const getCoordinates = async (address) => {
       const apiKey = "299250ace8954a778bdd2c92753d136c"
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        return {
          latitude: data.results[0].geometry.lat,
          longitude: data.results[0].geometry.lng,
        };
      } else {
        throw new Error('Address not found');
      }
    };

  
    const pickCoords = await getCoordinates(pickLocation);
    const dropCoords = await getCoordinates(dropLocation);

  
    const pickLocationEntry = new Location({
      address: pickLocation,
      latitude: pickCoords.latitude,
      longitude: pickCoords.longitude,
    });

    const dropLocationEntry = new Location({
      address: dropLocation,
      latitude: dropCoords.latitude,
      longitude: dropCoords.longitude,
    });

   
    const savedPickLocation = await pickLocationEntry.save();
    const savedDropLocation = await dropLocationEntry.save();

    
    return ({
      message: 'Locations saved successfully',
      data: {
        pickLocation: savedPickLocation,
        dropLocation: savedDropLocation
      }
    });
  } catch (error) {
    return ({ error: error.message });
  }
};


exports.createRide = async (rideData) => {
  try {
    const { userId, pickLocation, dropLocation, rideTime} = rideData;

    const getCoordinates = async (address) => {
      const apiKey = "299250ace8954a778bdd2c92753d136c";
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${apiKey}`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        return {
          latitude: data.results[0].geometry.lat,
          longitude: data.results[0].geometry.lng,
        };
      } else {
        throw new Error('Address not found');
      }
    };

    const pickCoords = await getCoordinates(pickLocation);
    const dropCoords = await getCoordinates(dropLocation);

    const ride = new Ride({
      user: userId, 
      startLocation: pickLocation,
      endLocation: dropLocation, 
      rideDate: rideTime, 
    });

    const savedRide = await ride.save();

    return {
      message: 'Ride created successfully',
      data: savedRide
    };
  } catch (error) {
    console.log(error,"error");
    return { error: error.message };
  }
};




