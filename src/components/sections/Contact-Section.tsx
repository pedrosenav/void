'use client'

import Container from '../Container'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from '../ui/form'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const form = useForm()

  return (
    <section>
      <Container>
        <h3 className="font-alt text-3xl">Começar projeto</h3>
        <Form {...form}>
          <FormField
            control={form.control}
            name="Contact"
            render={() => (
              <FormItem>
                <FormLabel />
                <FormControl>{/* Your form field */}</FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        </Form>
      </Container>
    </section>
  )
}
