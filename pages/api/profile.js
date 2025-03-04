import dbConnect from '@/libs/DbConnect';
import profile from '@/models/profile';
export default async function CreateProfile(req, res) {
  await dbConnect;
  if (req.method === 'POST') {
    const data = req.body;
  
try {
  const createProfile = await profile.create(data.data)
  
  res.status(200).json({ createProfile });
} catch (error) {
  res.status(400).json({error})
  console.log(error);
  
  
}

  } if (req.method === 'GET') {
      await dbConnect;
    try {
      const users = await profile.find()
      
      res.status(200).json({users:users})
    } catch (error) {
      res.status(401).json({error})
      
    }

  }
}
