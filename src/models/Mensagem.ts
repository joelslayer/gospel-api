import {Schema, model, Model, connection} from 'mongoose';

type msgType = {
    book: string,
    chapter: string,
    verse: string,
    text:string
}

const schema = new Schema<msgType>({
    book: String,
    chapter: String,
    verse: String,
    text: String
});

const msgModel:string = 'Mensagem';

export default (connection && connection.models[msgModel]) ? connection.models[msgModel] as Model<msgType> : model<msgType>(msgModel, schema, 'versiculo');