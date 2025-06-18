import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-white mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-300">Готовы обсудить ваш проект</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="font-montserrat font-bold text-2xl text-white mb-6">
              Контактная информация
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Icon
                  name="MapPin"
                  className="h-6 w-6 text-gray-400 mr-4 mt-1"
                />
                <div>
                  <h4 className="font-semibold text-white mb-1">Адрес</h4>
                  <p className="text-gray-300">
                    г. Москва, ул. Промышленная, 15
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Icon
                  name="Phone"
                  className="h-6 w-6 text-gray-400 mr-4 mt-1"
                />
                <div>
                  <h4 className="font-semibold text-white mb-1">Телефон</h4>
                  <p className="text-gray-300">+7 (495) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start">
                <Icon name="Mail" className="h-6 w-6 text-gray-400 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-gray-300">info@lasertech.ru</p>
                </div>
              </div>

              <div className="flex items-start">
                <Icon
                  name="Clock"
                  className="h-6 w-6 text-gray-400 mr-4 mt-1"
                />
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Режим работы
                  </h4>
                  <p className="text-gray-300">
                    Пн-Пт: 9:00-18:00
                    <br />
                    Сб-Вс: по договоренности
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
            <h3 className="font-montserrat font-bold text-2xl text-white mb-6">
              Заказать услугу
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Тип услуги
                </label>
                <select className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent">
                  <option>Лазерная резка</option>
                  <option>Лазерная сварка</option>
                  <option>Порошковая покраска</option>
                  <option>Комплексная услуга</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Описание проекта
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  placeholder="Опишите ваш проект..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
