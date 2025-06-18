import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Scissors",
      title: "Лазерная резка профильных труб",
      description:
        "Высокоточная резка профильных труб толщиной до 4мм с минимальным припуском",
      features: [
        "Точность ±0.1мм",
        "Чистый рез без заусенцев",
        "Любые сложные формы",
        "Быстрая обработка",
      ],
      applications: "Металлоконструкции, мебель, декор",
    },
    {
      icon: "Flame",
      title: "Лазерная сварка черных металлов",
      description:
        "Профессиональная сварка черных металлов с гарантией качества шва",
      features: [
        "Прочные швы",
        "Минимальная деформация",
        "Эстетичный вид",
        "Контроль качества",
      ],
      applications: "Рамы, каркасы, трубопроводы",
    },
    {
      icon: "Palette",
      title: "Порошковая покраска по RAL",
      description: "Качественная порошковая покраска в любой цвет каталога RAL",
      features: [
        "Долговечное покрытие",
        "Экологичность",
        "Любой цвет RAL",
        "Равномерное нанесение",
      ],
      applications: "Фасады, ограждения, детали интерьера",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-white mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Полный цикл лазерной обработки металла — от резки до финишной
            покраски
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
            >
              <div className="bg-gradient-to-br from-gray-600 to-gray-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon
                  name={service.icon as any}
                  className="h-8 w-8 text-white"
                />
              </div>

              <h3 className="font-montserrat font-bold text-xl text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3">Преимущества:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <Icon
                        name="Check"
                        className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4">
                <span className="text-sm font-medium text-gray-500">
                  Применение:{" "}
                </span>
                <span className="text-sm text-gray-300">
                  {service.applications}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
