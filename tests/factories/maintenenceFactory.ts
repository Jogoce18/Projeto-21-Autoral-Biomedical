import { faker } from "@faker-js/faker";

export async function createMaintenence() {
  return {
    title: faker.lorem.words(15),
    imageUrl : faker.image.imageUrl() + ".jpg",
    resume: faker.lorem.words(15),
    importantInfos:faker.lorem.words(15),
    startDate: "07/17/20",
    limitDate: "07/17/28",
    clientId: 2,
    value: 10
  
  };
}
