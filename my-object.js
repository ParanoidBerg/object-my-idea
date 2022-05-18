const helicopter = {
  isHit: false,
  name: "KA-52",
  rotorSystem: "coaxial",
  country: "Russia",
  crew: 2,
  weaponry: {
    canon: {
      name: "2a42",
      AProunds: 200,
      HErounds: 0,
    },
    rocketPods: {
      name: "S-13",
      HErockets: 16,
      TBrockets: 0,
    },
    ATGMs: {
      name: "Vikhr",
      amount: 12,
    },
  },

  getStatus: function () {
    console.log(`Hit: ${this.isHit} Crew: ${this.crew} AProunds: ${this.weaponry.canon.AProunds} HErounds: ${this.weaponry.canon.HErounds}
    HErockets: ${this.weaponry.rocketPods.HErockets} TBrockets: ${this.weaponry.rocketPods.TBrockets}
    ATGMs: ${this.weaponry.ATGMs.amount}`);
  },

  getHit: function () {
    this.isHit = true;
    console.log("Я подбит!");
  },

  eject: function () {
    if ((this.isHit = true)) {
      this.crew = 0;
      console.log("Прыгаю!");
    }
  },
  loadHeRounds: function () {
    this.weaponry.canon.HErounds = 200;
    this.weaponry.canon.AProunds = 0;
    console.log("KhhhhhhKCH");
  },
  loadTbRockets: function () {
    TBrockets = 16;
    HErockets = 0;
    console.log("kshshshhsshsh-T");
  },
  engageTheTankTarget: function () {
    if (this.crew > 0) {
      this.weaponry.ATGMs.amount -= 1;
      console.log("Ракета пошла, веду цель");
    } else {
      console.log("Unit is down");
    }
  },
};
