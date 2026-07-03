function migrateRecord(oldRecord, newRecord) {
  const result = { ...newRecord };

  for (const key in oldRecord) {
    if (!(key in result)) {
      result[key] = oldRecord[key];
    }
  }

  return result;
}