const mongoose=require('mongoose')


const Dbconnection=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Successfully connected to the database');
        
    } catch (error) {
        console.error('❌ Error connecting to the database:', error);
        
    }
}

module.exports={Dbconnection}
