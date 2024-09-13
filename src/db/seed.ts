import dayjs from 'dayjs'
import { client, db } from '.'
import { goalCompletions, goals } from './schema'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const startOfWeek = dayjs().startOf('week')

  const goalsResult = await db
    .insert(goals)
    .values([
      { title: 'Ler ao menos uma página', desiredWeeklyFrequency: 7 },
      { title: 'Ir para academia', desiredWeeklyFrequency: 5 },
      { title: 'Estudar', desiredWeeklyFrequency: 6 },
    ])
    .returning()

  await db.insert(goalCompletions).values([
    { goalId: goalsResult[0].id, createdAt: startOfWeek.toDate() },
    {
      goalId: goalsResult[1].id,
      createdAt: startOfWeek.add(1, 'day').toDate(),
    },
  ])
}

seed().finally(() => {
  client.end()
})
