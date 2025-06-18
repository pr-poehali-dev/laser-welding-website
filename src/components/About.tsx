import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-montserrat font-bold text-4xl text-white mb-6">
              О компании
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Мы специализируемся на высокоточной лазерной обработке металла.
              Наша команда профессионалов использует современное оборудование
              для выполнения задач любой сложности.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Icon name="Award" className="h-6 w-6 text-gray-400 mr-3" />
                <span className="text-gray-200">
                  Сертифицированные специалисты
                </span>
              </div>
              <div className="flex items-center">
                <Icon name="Settings" className="h-6 w-6 text-gray-400 mr-3" />
                <span className="text-gray-200">
                  Современное лазерное оборудование
                </span>
              </div>
              <div className="flex items-center">
                <Icon name="Users" className="h-6 w-6 text-gray-400 mr-3" />
                <span className="text-gray-200">Опытная команда инженеров</span>
              </div>
              <div className="flex items-center">
                <Icon name="Truck" className="h-6 w-6 text-gray-400 mr-3" />
                <span className="text-gray-200">Доставка по всей России</span>
              </div>
            </div>

            <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Узнать больше
            </button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-gray-900 p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-gray-300 mb-2">
                    500+
                  </div>
                  <div className="text-sm text-gray-400">
                    Выполненных проектов
                  </div>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-gray-300 mb-2">
                    5+
                  </div>
                  <div className="text-sm text-gray-400">Лет на рынке</div>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-gray-300 mb-2">
                    100%
                  </div>
                  <div className="text-sm text-gray-400">Гарантия качества</div>
                </div>
                <div className="bg-gray-900 p-6 rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-gray-300 mb-2">
                    24/5
                  </div>
                  <div className="text-sm text-gray-400">Техподдержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
