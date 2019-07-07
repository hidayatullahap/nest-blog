import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post as PostEntity } from '../entities/post.entity';

@Injectable()
export class PostsService {
    constructor(@InjectRepository(PostEntity) private postRepository: Repository<PostEntity>) { }

    async list(post: PostEntity): Promise<PostEntity[]> {
        return await this.postRepository.find();
    }

    async getOne(_id: number): Promise<PostEntity[]> {
        return await this.postRepository.find({
            select: ["title", "slug", "content"],
            where: [{ "id": _id }]
        });
    }

    async store(post: PostEntity) {
        return await this.postRepository.save(post);
    }

    async update(id: number, body: PostEntity) {
        let post = await this.postRepository.findOne(id);

        if (post !== undefined) {
            post.content = body.content;
            post.slug = body.slug;
            post.title = body.title;

            return await this.postRepository.update({ id: id }, post);
        } else {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: `Post with id: ${id} is not exist`,
            }, HttpStatus.BAD_REQUEST);
        }
    }

    async delete(post: PostEntity) {
        return await this.postRepository.delete(post);
    }
}