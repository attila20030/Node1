import { Sequelize,DataTypes, Op } from "sequelize";


const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  define: {
    timestamps: false,
  }
})

const Worker = sequelize.define(
  "worker",
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3,8]
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5,10]
      }
    },
    position: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    pay: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }
);

Worker.sync({ force: true })
	.then(() => {
		return Worker.bulkCreate([
      { firstname: "Bánfi",lastname: "Lili Orsolya", position: 'Sales manager',pay: 300000},
      { name: "Daroczi",lastname: "Ana Mária",position: "Worker", pay: 450000 },
      { name: "Dr.",lastname: "Pumi",position: "justadog", pay:  20 },
      { name: "Dr.",lastname: "Panda",position: "justadog", pay: 20 },
      { name: "Lala ",lastname: "Croft",position: "adventurer", pay: 250000 },
    ],
  );
});

// az összes dolgozó adatainak lekérdezésére

Worker.sync({ alter: true })
	.then(() => {
		return Worker.findAll();
	})
	.then((data) => {
		data.forEach((element) => {
			console.log(element.toJSON());
		});
	})
	.catch((err) => {
		console.log(`Error: ${err.message}`);
	});

// egy dolgozó adatainak lekérdezésére

Worker.sync({ alter: true })
	.then(() => {
		return Worker.findAll({ attributes: ["firstname"] });
	})
	.then((data) => {
		data.forEach((element) => {
			console.log(element.toJSON());
		});
	})
	.catch((err) => {
		console.log(`Error: ${err.message}`);
	});

// új dolgozó hozzáadására
Worker.sync({ alter: true})
.then(() =>{
  return Worker.update({ firstname: "Lala", lastname: "Croft", position: "Adventures", pay: 250000 })
})
.then((data) => {
  console.log(data);
})
.catch((err) => {
  console.log(`Error: ${err.message}`);
});

// dolgozó adatainak módosítására
Worker.sync({ alter: true })
	.then(() => {
		return Worker.update({ firstname: "Lala"}, {
			where: { firstname: "Lara" }				
		});
	})
	.then((data) => {
		console.log(data); 
	})
	.catch((err) => {
		console.log(`Error: ${err.message}`);
	});

// dolgozó törlésére
Worker.sync({ alter: true})
.then(() => {
  return Worker.destroy({ where: { pay: 250000}});
})
.then((data) => {
  console.log(data);
})
.catch((err) => {
  console.log(`Error: ${err.message}`);
});
