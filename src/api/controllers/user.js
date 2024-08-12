import {db} from "../db";

export const getUsers = ( _, res)=>{

    // endpoint pra qual tabela vai ser o get
     const q = "SELECT * FROM   usuarios";
        
     db.query(q, (err,data)=>{
        if (err) return res.json(console.err);

        return res.status(200).json(data);

        
     });
};