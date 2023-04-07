import
{   Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity} from "typeorm"

@Entity("product")
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({nullable:false})
    name: string

    @Column({nullable:false})
    price: number

    @Column()
    img: string

    @Column()
    size: string

    @Column()
    characteristic: string

    @Column()
    category: string

    @Column()
    stock: number

    @Column({default:false})
    favorites: boolean

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ type: 'timestamptz' }) // Recommended
    date_time_with_timezone: Date;

}