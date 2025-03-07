import { pgTable, serial, text, integer, varchar, json } from 'drizzle-orm/pg-core';

export const User = pgTable('users', {
	id: serial('id').primaryKey(),
	matric_no: varchar({ length: 12 }).notNull(),
	email: varchar({ length: 128 }).notNull()
});

export const Seller = pgTable("sellers", {
	id: serial('id').primaryKey(),
	name: varchar({ length: 256 }).notNull(),
	description: varchar({ length: 1024 }).notNull(),
	chat_id: varchar({ length: 16 }).notNull(),
	telegram_url: varchar({ length: 256 }).notNull(),
	matric_no: varchar({ length: 12 }).notNull(),
	email: varchar({ length: 128 }).notNull()
})

export const Product = pgTable("products", {
	id: serial('id').primaryKey(),
	name: varchar({length: 48}).notNull(),
	price: integer().notNull(),
	description: text(),
	images: json().notNull()
})