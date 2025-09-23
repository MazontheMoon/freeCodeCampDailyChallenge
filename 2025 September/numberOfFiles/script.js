/*
File Storage
Given a file size, a unit for the file size, and hard drive capacity in gigabytes (GB), return the number of files the hard drive can store using the following constraints:
- The unit for the file size can be bytes ("B"), kilobytes ("KB"), or megabytes ("MB").
- Return the number of whole files the drive can fit.

Use the following conversions:
Unit	Equivalent
1 B	    1 B
1 KB	1000 B
1 MB	1000 KB
1 GB	1000 MB
For example, given 500, "KB", and 1 as arguments, determine how many 500 KB files can fit on a 1 GB hard drive.
*/

/**
 * Return the number of whole files the drive can fit.
 *
 * @param {number} fileSize - size of each file.
 * @param {number} fileUnit - unit for the file size ("B", "KB", or "MB").
 * @param {number} driveSizeGb - size of HDD capacity in GB.
 * @return {number} Return the number of whole files the drive can fit.
 **/

function numberOfFiles(fileSize, fileUnit, driveSizeGb) {
  // Convert drive capacity to bytes
  const driveCapacityBytes = driveSizeGb * 1000 * 1000 * 1000;

  // Convert file size to bytes
  let fileSizeBytes;
  if (fileUnit === "B") {
    fileSizeBytes = fileSize;
  } else if (fileUnit === "KB") {
    fileSizeBytes = fileSize * 1000;
  } else if (fileUnit === "MB") {
    fileSizeBytes = fileSize * 1000 * 1000;
  } else {
    throw new Error("Invalid file unit. Use 'B', 'KB', or 'MB'.");
  }

  // Calculate how many whole files fit
  return Math.floor(driveCapacityBytes / fileSizeBytes);
}
