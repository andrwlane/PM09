import axios from "axios";
import { useEffect, useState } from "react";

export const CostCalculator = () => {
  const [cost, setCost] = useState(null);
  const [formData, setFormData] = useState({
    square: 0,
    floors: 0,
    foundationType: "Бетонный",
    wallMaterial: "Кирпич",
    roofType: "Плоская",
    additionalOptions: [],
  });

  const calculateCost = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/calculate-cost",
        formData
      );
      setCost(response.data.cost);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cost-calculator container">
      <h1>Калькулятор стоимости</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="cost-calculator-form"
      >
        <input
          type="number"
          placeholder="Площадь"
          value={formData.square}
          onChange={(e) => setFormData({ ...formData, square: e.target.value })}
        />
        <input
          type="number"
          placeholder="Количество этажей"
          value={formData.floors}
          onChange={(e) => setFormData({ ...formData, floors: e.target.value })}
        />
        <select
          onChange={(e) =>
            setFormData({ ...formData, foundationType: e.target.value })
          }
          value={formData.foundationType}
        >
          <option disabled value="Тип фундамента">
            Тип фундамента
          </option>
          <option value="Бетонный">Бетонный</option>
          <option value="Кирпичный">Кирпичный</option>
          <option value="Монолитный">Монолитный</option>
        </select>
        <select
          onChange={(e) =>
            setFormData({ ...formData, wallMaterial: e.target.value })
          }
          value={formData.wallMaterial}
        >
          <option disabled value="Материал стен">
            Материал стен
          </option>
          <option value="Кирпич">Кирпич</option>
          <option value="Дерево">Дерево</option>
          <option value="Газобетон">Газобетон</option>
        </select>
        <select
          onChange={(e) =>
            setFormData({ ...formData, roofType: e.target.value })
          }
          value={formData.roofType}
        >
          <option disabled value="Тип крышы">
            Тип крышы
          </option>
          <option value="Плоская">Плоская</option>
          <option value="Скатная">Скатная</option>
        </select>

        <div>
          <label htmlFor="balcony">Балкон</label>
          <input
            type="checkbox"
            id="balcony"
            name="balcony"
            value="Балкон"
            onChange={(e) => {
              if (e.target.checked) {
                setFormData({
                  ...formData,
                  additionalOptions: [
                    ...formData.additionalOptions,
                    e.target.value,
                  ],
                });
              } else {
                setFormData({
                  ...formData,
                  additionalOptions: formData.additionalOptions.filter(
                    (option) => option !== e.target.value
                  ),
                });
              }

              console.log(e.target.isActive);
            }}
          />
        </div>

        <div>
          <label htmlFor="garage">Гараж</label>
          <input
            type="checkbox"
            id="garage"
            name="garage"
            value="Гараж"
            onChange={(e) => {
              if (e.target.checked) {
                setFormData({
                  ...formData,
                  additionalOptions: [
                    ...formData.additionalOptions,
                    e.target.value,
                  ],
                });
              } else {
                setFormData({
                  ...formData,
                  additionalOptions: formData.additionalOptions.filter(
                    (option) => option !== e.target.value
                  ),
                });
              }

              console.log(e.target.isActive);
            }}
          />
        </div>

        <div>
          <label htmlFor="terrace">Терасса</label>
          <input
            type="checkbox"
            id="terrace"
            name="terrace"
            value="Терасса"
            onChange={(e) => {
              if (e.target.checked) {
                setFormData({
                  ...formData,
                  additionalOptions: [
                    ...formData.additionalOptions,
                    e.target.value,
                  ],
                });
              } else {
                setFormData({
                  ...formData,
                  additionalOptions: formData.additionalOptions.filter(
                    (option) => option !== e.target.value
                  ),
                });
              }

              console.log(e.target.isActive);
            }}
          />
        </div>

        <button
          onClick={calculateCost}
          disabled={!formData.square || !formData.floors}
          type="button"
        >
          Рассчитать
        </button>
        {cost && <p>Стоимость: {cost}₽</p>}
      </form>
    </div>
  );
};
