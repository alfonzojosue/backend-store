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

    @Column()
    name: string

    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, })
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

}