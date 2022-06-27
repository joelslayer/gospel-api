import {Request, Response} from 'express';
import Mensagem from '../models/Mensagem';

export const main = async (req: Request, res: Response)=>{
    // let list = await Mensagem.find({});
    let list = await Mensagem.aggregate([{$sample:{size:1}}]);
    // res.render('page/page', {
    //     list
    // })
    res.json({list});
}