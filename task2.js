"use strict";

function Company(name, salary) {
  const staff = { name, income: 0 };

  Company.addStaff(staff);

  this.income = function (v) {
    staff.income += v - salary;
    Company.store.money += v - salary;
  };
  this.spend = function (v) {
    staff.income -= v;
    Company.store.money -= v;
  };
}

Company.store = {
  staffList: [],
  countStaff: 0,
  money: 0,
};

Company.addStaff = function (staff) {
  Company.store.staffList.push(staff);
  Company.store.countStaff++;
};

Company.getLeaders = function () {
  let maxIncome = Company.store.staffList[0].income;
  return Company.store.staffList.reduce((acc, staff) => {
    if (staff.income > maxIncome) {
      maxIncome = staff.income;
      return [staff];
    }

    if (staff.income === maxIncome) {
      return [...acc, staff];
    }

    return acc;
  }, []);
};
