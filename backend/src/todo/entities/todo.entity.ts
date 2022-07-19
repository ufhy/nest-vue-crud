import {
  Table,
  Model,
  Column,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from 'sequelize-typescript';

@Table({ tableName: 'Todos' })
export class Todo extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @Column({
    type: DataType.ENUM,
    allowNull: false,
    values: ['PENDING', 'PROGRESS', 'DONE'],
  })
  status: 'PENDING' | 'PROGRESS' | 'DONE';
}
