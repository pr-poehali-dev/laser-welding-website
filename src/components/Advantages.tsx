import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Target",
      title: "Высокая точность",
      description: "Лазерные технологии обеспечивают точность резки ±0.1мм",
    },
    {
      icon: "Clock",
      title: "Быстрые сроки",
      description:
        "Автоматизированное производство сокращает время изготовления",
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Контроль на каждом этапе производства",
    },
    {
      icon: "Wrench",
      title: "Индивидуальный подход",
      description: "Работаем по чертежам и техническим заданиям заказчика",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Современное оборудование и опытные специалисты
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon
                  name={advantage.icon as any}
                  className="h-10 w-10 text-white"
                />
              </div>
              <h3 className="font-montserrat font-bold text-lg mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
