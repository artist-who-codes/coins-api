import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    findAll() {
        console.log('UI called /test endpoint!');
        return { status: 'API is working!' };
    }
}
