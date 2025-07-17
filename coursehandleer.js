const { User } = require("./model");

const courseHandler = async (chatid, sem) => {
  try {
    let user = await User.findOne({ userid: chatid });

    if (!user) {
      // Create and save new user with first semester
      user = new User({
        userid: chatid,
        sem: sem
      });
      await user.save();
      console.log(`✅ New user created with chatId ${chatid}`);
    } else {
      // Update semester if different
      if (user.sem != sem) {
        user.sem = sem;
        await user.save();
        console.log(`✅ Semester ${sem} updated for chatId ${chatid}`);
      } else {
        console.log(`ℹ️ Semester ${sem} already exists for chatId ${chatid}`);
      }
    }
  } catch (error) {
    console.error('❌ Error in courseHandler:', error);
  }
};

module.exports = { courseHandler };
