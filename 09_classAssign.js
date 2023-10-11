console.log(
    `============================================= Assignment Class =====================================================`
  );
  console.log(
    `====================================== Step 1 =====================================`
  );
  class Vehicle {
    companyName;
    modelName;
    variant;
    fuel;
    average;
    price;
  
    constructor(companyName, modelName, variant, fuel, average, price) {
      this.companyName = companyName;
      this.modelName = modelName;
      this.variant = variant;
      this.fuel = fuel;
      this.average = average;
      this.price = price;
    }
  }
  const hyundai = new Vehicle('Hyundai', "Verna", 'Base Variant' ,"Petrol", "20 kmpl", '20 lakh');
  
  const tata = new Vehicle(
    "TATA",
    "Punch",
    "Top Variant",
    "Petrol",
    "15 KMPL",
    "10Lakh"
  )
  
  const mahindra = new Vehicle(
    "Mahindra",
    "Scorpio",
    "Top Variant",
    "Diesel",
    "22 KMPL",
    "25Lakh"
  );
  
  const toyota = new Vehicle(
    "TOYOTA",
    "Fortuner",
    "Base Variant",
    "Petrol",
    "20 KMPL",
    "23Lakh"
  );
  
  const honda = new Vehicle(
    "HONDA",
    "CITY",
    "Base Variant",
    "Diesel",
    "19 KMPL",
    "24Lakh"
  );
  
  console.log(
    `=========================================== Traversing the array ================================================= `
  );
  
  const arrayOfVehicles = [hyundai, tata, mahindra, toyota, honda];
  for (const element of arrayOfVehicles) {
    console.log(``);
    console.log(`The Important Information About the Vehicles==>`, element);
  }
  
  console.log(
    `                                                                                                 `
  );
  console.log(
    `====================================== Step 2 =====================================`
  );
  
  class College {
    constructor(collegeName, location, totalBranches, university) {
      this.collegeName = collegeName;
      this.location = location;
      this.totalBranches = totalBranches;
      this.university = university;
    }
    display() {
      console.log(
        `College Details:${this.collegeName},${this.location},${this.totalBranches},${this.university}`
      );
    }
  }
  const gode = new College("Dr. Rajendra Gode Institute Of Technology", " Amravati", 7, " SGBAU");
  gode.display();
  const jagdamba = new College(
    "Jagdamba College of Engineering",
    " Yavatmal",
    5,
    " SGBAU"
  );
  jagdamba.display();
  const bit = new College("BIT", " Ballarpur", 6, " DBATU");
  bit.display();
  const sipna = new College(
    "Sipna College of Engineering",
    " Amravati",
    7,
    " SGBAU"
  );
  sipna.display();
  console.log(
    `                                                                                                 `
  );
  console.log(
    `====================================== Traversing the array =====================================`
  );
  const arrayOfCollege = [gode, jagdamba, bit, sipna];
  for (const clg of arrayOfCollege) {
    console.log(`The Information About College`, clg);
  }
  console.log(
    `====================================== Step 3 =====================================`
  );
  
  function traversObject(objectclg) {
    for (const key in objectclg) {
      const element = objectclg[key];
      console.log(`${key}: ${element}`);
    }
  }
  traversObject(gode);
  traversObject(jagdamba);
  traversObject(bit);
  traversObject(sipna);