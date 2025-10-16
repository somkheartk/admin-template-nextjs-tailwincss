import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.schema';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  async create(createOrderDto: any): Promise<OrderDocument> {
    const orderNumber = `ORD-${Date.now()}`;
    const createdOrder = new this.orderModel({ ...createOrderDto, orderNumber });
    return createdOrder.save();
  }

  async findAll(): Promise<OrderDocument[]> {
    return this.orderModel.find().populate('userId').populate('items.productId').exec();
  }

  async findById(id: string): Promise<OrderDocument | null> {
    return this.orderModel.findById(id).populate('userId').populate('items.productId').exec();
  }

  async findByUserId(userId: string): Promise<OrderDocument[]> {
    return this.orderModel.find({ userId }).populate('items.productId').exec();
  }

  async update(id: string, updateOrderDto: any): Promise<OrderDocument | null> {
    return this.orderModel.findByIdAndUpdate(id, updateOrderDto, { new: true }).exec();
  }

  async updateStatus(id: string, status: string): Promise<OrderDocument | null> {
    return this.orderModel.findByIdAndUpdate(id, { status }, { new: true }).exec();
  }

  async remove(id: string): Promise<OrderDocument | null> {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
