import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: "./config/config.env" });

export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();


    const options = {
      httpOnly: true, // Set httpOnly to true
      secure: true,
      sameSite: "None",
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
  };