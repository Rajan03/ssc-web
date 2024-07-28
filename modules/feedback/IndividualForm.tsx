import {Tab} from "@headlessui/react";
import {ITeam, IndividualFormSchema} from "@/types";
import {z} from "zod";
import {Opinions} from "@/utils/constants";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {AnimatedBtn, Input, RadioLabelledBtn, Select} from "@/components";
import date from "date-and-time";

const IndividualForm = ({coaches, submitForm, loading}: {
    coaches: ITeam[],
    loading: boolean,
    submitForm: (_data: IndividualFormSchema) => Promise<{ ok: boolean }>
}) => {
    const schema = z.object({
        firstName: z
            .string({required_error: 'First Name is required!'})
            .min(2, {message: 'First name must be at least 2 characters long.'}),
        lastName: z
            .string()
            .min(2, {message: 'Last name must be at least 2 characters long.'}),
        email: z
            .string({required_error: 'Email is required!'})
            .email({message: 'Please enter a valid email address.'}),
        coachName: z
            .string({required_error: 'Coach Name is required!'})
            .min(2, {message: 'Coach name must be at least 2 characters long.'}),
        date: z
            .string({required_error: 'Date is required!'}),
        principles: z.enum([Opinions.STRONG_DISAGREE, Opinions.DISAGREE, Opinions.NEUTRAL, Opinions.AGREE, Opinions.STRONG_AGREE]),
        talentStrength: z.enum([Opinions.STRONG_DISAGREE, Opinions.DISAGREE, Opinions.NEUTRAL, Opinions.AGREE, Opinions.STRONG_AGREE]),
        collectiveStrength: z.enum([Opinions.STRONG_DISAGREE, Opinions.DISAGREE, Opinions.NEUTRAL, Opinions.AGREE, Opinions.STRONG_AGREE]),
        strategy: z.enum([Opinions.STRONG_DISAGREE, Opinions.DISAGREE, Opinions.NEUTRAL, Opinions.AGREE, Opinions.STRONG_AGREE]),
        comments: z
            .string()
            .min(2, {message: 'Comments must be at least 2 characters long.'}),
    });
    const optArr = [Opinions.STRONG_DISAGREE, Opinions.DISAGREE, Opinions.NEUTRAL, Opinions.AGREE, Opinions.STRONG_AGREE]
    const defaultValues: IndividualFormSchema = {
        firstName: '',
        lastName: '',
        email: '',
        coachName: coaches ? coaches[0].name : '',
        date: date.format(new Date(), 'YYYY-MM-DD'),
        principles: Opinions.NEUTRAL,
        talentStrength: Opinions.NEUTRAL,
        collectiveStrength: Opinions.NEUTRAL,
        strategy: Opinions.NEUTRAL,
        comments: ''
    }
    const {
        formState: {errors},
        handleSubmit,
        register,
        getValues,
        setValue,
        reset,
    } = useForm<IndividualFormSchema>({
        defaultValues, resolver: zodResolver(schema)
    })

    const onSubmit = (data: IndividualFormSchema) => {
        data.type = 'individual'
        submitForm(data).then((res) => {
            if (res.ok) {
                console.log('Submitted successfully')
                reset(defaultValues);
            }
        })
    }

    const onCoachNameChange = (value: string) => {
        setValue('coachName', value)
    }

    const onRadioValueChange = (value: Opinions, radioIp: "principles" | "talentStrength" | "collectiveStrength" | "strategy") => {
        setValue(radioIp, value)
    }
    return (
        <Tab.Panel as={'form'} onSubmit={handleSubmit(onSubmit)}
                   className={'mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16'}>
            <Input label={'First Name'} error={errors['firstName']} id={'firstName'}
                   {...register('firstName', {required: true})}
                   className={'col-span-2 md:col-span-1'}/>

            <Input label={'Last Name'} error={errors['lastName']} id={'lastName'}
                   {...register('lastName', {required: true})}
                   className={'col-span-2 md:col-span-1'}/>

            <Input label={'Email ID'} error={errors['email']} id={'email'}
                   {...register('email', {required: true})}
                   className={'col-span-2 md:col-span-1'}/>

            <Select label={'Coach Name'} error={errors['coachName']?.message}
                    selected={getValues('coachName')} setSelected={onCoachNameChange}
                    options={coaches?.map(c => c.name)}
                    className={'col-span-2 md:col-span-1'}/>

            <Input label={'Date'} error={errors['date']} id={'date'} type={'date'}
                   {...register('date', {required: true})}
                   className={'col-span-2 md:col-span-1'}/>

            <RadioLabelledBtn
                className={'col-span-2'}
                label={'My coach helped me as a Manager to understand Strengths-based principles'}
                value={getValues('principles')} options={optArr}
                setValue={(_v) => onRadioValueChange(_v, 'principles')}/>

            <RadioLabelledBtn
                className={'col-span-2'}
                label={'I found this Coaching process relevant and engaging'}
                value={getValues('talentStrength')} options={optArr}
                setValue={(_v) => onRadioValueChange(_v, 'talentStrength')}/>

            <RadioLabelledBtn
                className={'col-span-2'}
                label={'My coach asked helpful questions to help me understand my Strengths and how to apply them'}
                value={getValues('collectiveStrength')} options={optArr}
                setValue={(_v) => onRadioValueChange(_v, 'collectiveStrength')}/>

            <RadioLabelledBtn
                className={'col-span-2'}
                label={'My coach helped me unpack how my themes work together' +
                    'and Strengths towards team goals and performance'}
                value={getValues('collectiveStrength')} options={optArr}
                setValue={(_v) => onRadioValueChange(_v, 'collectiveStrength')}/>

            <Input label={'What are some key "learnings” from your coaching session that helped you connect ' +
                'your themes to your current role and responsibilities? ?'}
                   error={errors['comments']} id={'comments'} type={'textarea'}
                   {...register('comments')} className={'col-span-2 min-h-[20rem] resize-none'}/>

            <Input label={'How has understanding your CliftonStrengths 34 report helped you negotiate a current ' +
                'challenge or opportunity? '}
                   error={errors['comments']} id={'comments'} type={'textarea'}
                   {...register('comments')} className={'col-span-2 min-h-[20rem] resize-none'}/>

            <Input label={'Are there any additional comments you would like to make?'}
                   error={errors['comments']} id={'comments'} type={'textarea'}
                   {...register('comments')} className={'col-span-2 min-h-[16rem] resize-none'}/>

            <div className={'flex flex-col justify-center items-start col-span-1'}>
                <AnimatedBtn loading={loading} disabled={loading} type={'submit'} text={'Submit'} className={'w-1/2'}/>
            </div>
        </Tab.Panel>
    )
}

export default IndividualForm
