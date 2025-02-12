import styled from "styled-components";
import Ticket from "../components/Ticket";
import { useModal } from "../hooks/useModal";
import { Modal } from "../components/Modal";

const TicketsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    height: auto;
    padding-bottom: 20px;
  }
`;

const TicketTitle = styled.h1`
  font-family: "Bungee", sans-serif;
  font-weight: 400;
  font-size: 70px;
  color: #fff;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

const TicketItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const ticketTypes = [
  {
    color1: "#F29FA2",
    color2: "#FD67BA",
    price: 220,
    priceDiscounted: 160,
    title: "1 Masina",
    description: "Pentru tine si camarazii tai.",
    href: "https://www.google.com"
  },
  {
    color1: "#0093FF",
    color2: "#00C6F6",
    price: 360,
    priceDiscounted: 260,
    title: "2 Masini",
    description: "Pentru toata gasca ta.",
    href: "https://www.google.com"
  }
];

const modalHtml =
  `
Înregistrarea la eveniment e simplă. Dai click pe linkul de mai jos ce te duce către un formular.<br /><br />
<b>Formularul de inscriere</b> <a href="https://www.google.com" target="_blank">aici</a>.<br /><br />
După ce ai completat datele în formular, vei primi factura pentru înscrierea la eveniment pe adresa ta de email. Pe factură vei avea două modalități de plată: fie prin transfer bancar, fie prin linkul de pe factură. Odată ce ai primit factura, ai la dispoziție 3 zile pentru a plăti taxa de înscriere. În caz contrar, înregistrarea va fi anulată.<br /><br />
** Factura pentru taxa de înscriere poate fi emisă și pentru persoane juridice. Pentru această opțiune, ne puteți contacta prin email, rețele sociale sau la telefon la +40752422685 **<br /><br />
`

function Tickets() {
  const { isOpen, modalTitle, modalContent, openModal, closeModal } = useModal();

  return (<>
    <TicketsContainer>
      <TicketTitle>BILETE</TicketTitle>
      <TicketItemContainer>
        {ticketTypes.map((ticket) => (
          <a
            key={ticket.title}
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => openModal(ticket.title, modalHtml)}
          >
            <Ticket {...ticket} />
          </a>
        ))}
      </TicketItemContainer>
    </TicketsContainer>
    <Modal
      isOpen={isOpen}
      title={modalTitle}
      content={modalContent}
      onClose={closeModal}
    />
  </>
  );
}

export default Tickets;
