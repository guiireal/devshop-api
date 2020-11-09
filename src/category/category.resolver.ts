import { CategoryMapper } from './category.mapper';
import { CategoryCreateInput } from './dto/category-create.input';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { CategoryDTO } from './dto/category.dto';

@Resolver(() => CategoryDTO)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [CategoryDTO], { name: 'getAllCategories' })
  async getAllCategories(): Promise<CategoryDTO[]> {
    return await this.categoryService.findAll();
  }

  @Mutation(() => CategoryDTO, { name: 'createCategory' })
  async createCategory(
    @Args('input') input: CategoryCreateInput
  ): Promise<CategoryDTO> {
    return this.categoryService.create(CategoryMapper.toEntity(input));
  }
}
