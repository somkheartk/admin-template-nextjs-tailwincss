import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  sku: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ default: 0 })
  quantity: number;

  @Prop()
  category: string;

  @Prop()
  imageUrl: string;

  @Prop({ default: 'active', enum: ['active', 'inactive', 'discontinued'] })
  status: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
