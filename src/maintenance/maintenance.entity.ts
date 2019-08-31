import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Maintenance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;
  
  @Column()
  deviceId: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column()
  amountOfWork: string; // "1h" "1d" "2M" and etc.

  @Column()
  state: string; // not_started|started|completed

  @Column()
  validFrom: Date;

  @Column()
  validTo: Date;
}
