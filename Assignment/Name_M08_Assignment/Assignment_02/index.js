function calculateSphereVolume(radius) {
    const pi = 3.14;
    const volume = (4/3) * pi * Math.pow(radius, 3);
    return volume;
  }
  const radius = 3;
  const volume = calculateSphereVolume(radius);
  console.log(volume.toFixed(1));
  