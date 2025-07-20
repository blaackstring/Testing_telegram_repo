const { getFilesBysem } = require("./app")
const mongoose = require('mongoose');





test('get file SEM3,M.TECH result should be []', async() => {
    const res= await getFilesBysem('SEM1','B.TECH')
     res.forEach(d=>{
        expect(d).toHaveProperty('courseCode');
        expect(d).toHaveProperty('url')
     })
})


test('throw error on parameter missing',async()=>{
    await expect(getFilesBysem()).rejects.toThrow()
})


afterAll(async () => {
  await mongoose.connection.close();
});