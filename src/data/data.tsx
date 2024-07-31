
export const data = [
  {
      firstName: 'Иван',
      lastName: 'Иванов',
      position: 'Секретарь',
      startDate: new Date(2011, 0, 1),
      email: 'example@yandex.ru',
      subordinates: null,
  },
  {
      firstName: 'Петр',
      lastName: 'Петров',
      position: 'Главный бухгалтер',
      startDate: new Date(2015, 10, 1),
      email: 'example@yandex.ru',
      subordinates: [
          {
              firstName: 'Илья',
              lastName: 'Ильин',
              position: 'Бухгалтер',
              startDate: new Date(2023, 5, 1),
              email: null,
              subordinates: null,
          },
          {
              firstName: 'Кирилл',
              lastName: 'Кириллов',
              position: 'Экономист',
              startDate: new Date(2019, 10, 1),
              email: 'example@yandex.ru',
              subordinates: null,
          },
          {
              firstName: 'Михаил',
              lastName: 'Мишин',
              position: 'Бухгалтер',
              startDate: new Date(2016, 1, 1),
              email: 'example@yandex.ru',
              subordinates: [
                  {
                      firstName: 'Иван',
                      lastName: 'Иванов',
                      position: 'Секретарь',
                      startDate: new Date(2020, 0, 1),
                      email: 'example@yandex.ru',
                      subordinates: null,
                  }
              ],
          }
      ]
  },
  {
      firstName: 'Игорь',
      lastName: 'Игорев',
      position: 'Директор',
      startDate: new Date(2011, 0, 1),
      email: 'example@yandex.ru',
      subordinates: [
          {
              firstName: 'Дмитрий',
              lastName: 'Дмитриев',
              position: 'Юрист',
              startDate: new Date(2015, 0, 1),
              email: null,
              subordinates: null,
          }
      ],
  },
  {
      firstName: 'Николай',
      lastName: 'Николаев',
      position: 'Специалист технической поддержки',
      startDate: new Date(2011, 0, 1),
      email: 'example@yandex.ru',
      subordinates: [
        {
            firstName: 'Илья',
            lastName: 'Ильин',
            position: 'Бухгалтер',
            startDate: new Date(2023, 5, 1),
            email: null,
            subordinates: null,
        },
        {
            firstName: 'Кирилл',
            lastName: 'Кириллов',
            position: 'Экономист',
            startDate: new Date(2019, 10, 1),
            email: 'example@yandex.ru',
            subordinates: null,
        },
        {
            firstName: 'Михаил',
            lastName: 'Мишин',
            position: 'Бухгалтер',
            startDate: new Date(2016, 1, 1),
            email: 'example@yandex.ru',
            subordinates: [
                {
                    firstName: 'Иван',
                    lastName: 'Иванов',
                    position: 'Секретарь',
                    startDate: new Date(2020, 0, 1),
                    email: 'example@yandex.ru',
                    subordinates: null,
                }
            ],
        }
    ]
  },
  {
      firstName: 'Андрей',
      lastName: 'Андреев',
      position: 'Главный менеджер',
      startDate: new Date(2011, 0, 1),
      email: 'example@yandex.ru',
      subordinates: [
          {
              firstName: 'Глеб',
              lastName: 'Глебов',
              position: 'Менеджер',
              startDate: new Date(2011, 0, 1),
              email: null,
              subordinates: null,
          }
      ],
  }
];

