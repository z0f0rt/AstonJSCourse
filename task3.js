const samplePerson = {
  name: "New User",
  skills: [],
};

const createPerson = (person) => ({
  ...samplePerson,
  ...person,
  addSkill(skill) {
    if (!this.skills.includes(skill)) {
      this.skills.push(skill);
    }
    return this;
  },
  removeSkill(skill) {
    const index = this.skills.indexOf(skill);
    if (index !== -1) {
      this.skills.splice(index, 1);
      return this;
    }
    return this;
  },
  addName(newName) {
    this.name = newName;
    return this;
  },
});
