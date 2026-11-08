import jwt from 'jsonwebtoken';
import logger from '#config/logger.js';


const JWT_SECRET = process.env.JWT_SECRET || 'secret key change it in production';


const JWT_EXPIRES_IN = '1d';


export const jwttoken = {
  sign: (payload) => {
    try {

      return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    }catch(error) {
      logger.error(`Failed to sign JWT token: ${error.message}`);
      throw new Error('Failed to sign JWT token', { cause: error });
    }
  },

  verify: (token) => {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (e) {
      logger.error(`Failed to verify JWT token: ${e.message}`);
      throw new Error('Failed to verify JWT token', { cause: e });
    }
  }
};
