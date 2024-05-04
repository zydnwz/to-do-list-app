import { MongoClient, ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const client = await MongoClient.connect(
    'mongodb+srv://allforfre1:Aej5Ma5emvkkQ3iM@cluster0.24yt2u0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  );
  const db = client.db();

  if (req.method === 'GET') {
    const tasks = await db.collection('tasks').find().toArray();
    res.status(200).json({ tasks });
  } else if (req.method === 'POST') {
    const { text } = req.body;
    const result = await db.collection('tasks').insertOne({ text, completed: false });
    res.status(201).json({ message: 'Task added', task: { _id: result.insertedId, text, completed: false } });
  } else if (req.method === 'PUT') {
    const { taskId } = req.query;
    const { text } = req.body;
    await db.collection('tasks').updateOne({ _id: new ObjectId(taskId) }, { $set: { text } });
    res.status(200).json({ message: 'Task updated' });
  } else if (req.method === 'DELETE') {
    const { taskId } = req.query;
    await db.collection('tasks').deleteOne({ _id: new ObjectId(taskId) });
    res.status(200).json({ message: 'Task deleted' });
  }

  client.close();
}