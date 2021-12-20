import { ButtonHTMLAttributes, useState } from 'react';

import { WidgetContainer, WidgetSectionContainer } from './styles';

type Widget = {
  number: number;
  text: string;
  title: string;
  description: string;
}

interface WidgetSectionProps {
  widget: Omit<Widget, 'number'>[];
  onSelect: (title: string, text: string) => void;
}

interface WidgetItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  widget: Pick<Widget, 'number' | 'description'>;
  isActive: boolean;
}

export function WidgetSection({ widget, onSelect }: WidgetSectionProps) {
  const [widgetActive, setWidgetActive] = useState<Omit<Widget, 'description'> | null>(null);

  function handleActiveWidget(id: number, title: string, text: string) {
    setWidgetActive({
      number: id,
      title,
      text,
    });

    onSelect(title, text);
  }

  return (
    <WidgetSectionContainer>
      {widget.map((item, index) => {
        const number = ++index;
        const isActive = widgetActive?.number === number;

        return (
          <WidgetItem
            key={number}
            widget={{
              description: item.description,
              number
            }}
            isActive={isActive}
            onClick={() => handleActiveWidget(number, item.title, item.text)}
          />
        );
      })}
    </WidgetSectionContainer>
  )
}

function WidgetItem({ widget, isActive, ...rest }: WidgetItemProps) {
  return (
    <WidgetContainer {...rest} isActive={isActive}>
      <span>{widget.number}.</span>
      <p>{widget.description}</p>
    </WidgetContainer>
  )
}