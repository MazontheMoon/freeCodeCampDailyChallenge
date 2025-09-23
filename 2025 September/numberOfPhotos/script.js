/*
Challenge - Photo Storage
Given a photo size in megabytes (MB), and hard drive capacity in gigabytes (GB), return the number of photos the hard drive can store using the following constraints:
- 1 gigabyte equals 1000 megabytes.
- Return the number of whole photos the drive can store.
*/

/**
 * Returns the number of whole photos the drive can store.
 *
 * @param {number} photoSizeMb - size of each photo in megabytes.
 * @param {number} hardDriveSizeGb - size of the hard drive in gigabytes.
 * @return {number} the number of photoSizeMb that can fit in hardDriveSizeGb.
 **/

function numberOfPhotos(photoSizeMb, hardDriveSizeGb) {
  // Convert GB to MB
  const driveCapacityMb = hardDriveSizeGb * 1000;
  
  // Calculate how many photos fit and return whole number
  return Math.floor(driveCapacityMb / photoSizeMb);
}
