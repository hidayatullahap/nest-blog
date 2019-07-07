import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from '../entities/post.entity';
@Controller('posts')
export class PostsController {
    constructor(private service: PostsService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getOne(params.id);
    }

    @Post()
    public async create(@Body() post: PostEntity) {
        const result = this.service.store(post);

        return result;
    }

    @Put(':id')
    update(@Param() params, @Body() post: PostEntity) {
        return this.service.update(params.id, post);
    }

    @Delete(':id')
    deletePost(@Param() params) {
        return this.service.delete(params.id);
    }
}