import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import City from './models/city.entity'
import Company from './db/models/company.entity'
import Genre from './db/models/genre.entity'
import CompanyGenre from './db/models/Company-genre.entity'

@Injectable()
class RepoService {
	public constructor(
		@InjectRepository(City) public readonly cityRepo: Repository<City>,
		@InjectRepository(Company) public readonly companyRepo: Repository<Company>,
		@InjectRepository(Genre) public readonly genreRepo: Repository<Genre>,
		@InjectRepository(BookGenre)
		public readonly bookGenreRepo: Repository<BookGenre>
	) {}
}

export default RepoService
