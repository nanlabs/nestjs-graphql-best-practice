import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { City } from './models/city.entity'

@Injectable()
class RepoService {
	public constructor(
		@InjectRepository(City) public readonly cityRepo: Repository<City>
	) {}
}

export default RepoService
