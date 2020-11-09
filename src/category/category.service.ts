import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CategoryDTO } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>
  ) {}

  async findAll(): Promise<CategoryDTO[]> {
    return this.categoryRepository.find();
  }

  async create(input: Category): Promise<Category> {
    return this.categoryRepository.save(input);
  }
}
