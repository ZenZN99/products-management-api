import jsonwebtoken from "jsonwebtoken";

export function generateToken(userId) {
  return jsonwebtoken.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
}
