import styled from "styled-components";

export const PaymentMethodInputContainer = styled.div`
  height: 3.1875rem;
  padding: 1rem;
  font-size: 0.75rem;
  border-radius: 6px;
  text-transform: uppercase;
  transition: 0.4s;
  user-select: none;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  background: ${({ theme }) => theme.colors["base-button"]};

  display: flex;
  align-items: center;
  gap: 0.75rem;

  & svg {
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors["brand-purple-dark"]};
  }
`;
