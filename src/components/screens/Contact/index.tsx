import { FormEvent, memo } from 'react';
import { ScreenContainer } from '@components:global';
import {
  SectionTitle,
  CLIMode,
  InputBox,
  PrimaryButton,
  TextareaBox,
} from '@components:ui';
import { ButtonType, InputType } from '@types';
import styles from './Contact.module.scss';

export const Contact = memo(function Contact() {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <ScreenContainer anchor="contact" className={styles.box}>
      <SectionTitle
        cli={{
          user: 'andrewench',
          branch: 'main',
          command: 'send-email --username andrewench',
          mode: CLIMode.LIGHT,
        }}
      />

      <form onSubmit={onSubmit} className={styles.form}>
        <h2 className={styles.heading}>Contact me</h2>
        <InputBox label="Firstname" type={InputType.TEXT} />
        <InputBox label="Lastname" type={InputType.TEXT} />
        <InputBox label="Email" type={InputType.EMAIL} />
        <TextareaBox label="Message" />

        <PrimaryButton type={ButtonType.SUBMIT} className={styles.submit}>
          Send
        </PrimaryButton>
      </form>
    </ScreenContainer>
  );
});
