// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const helloAPI = (req, res) =>{
  res.status(200).json({ name: 'Jesus Christ' })
}

export default helloAPI;
