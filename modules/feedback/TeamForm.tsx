import {z} from "zod";
import React from "react";
import {Tab} from "@headlessui/react";
import {useForm} from "react-hook-form";

import {Opinions} from "@/utils/constants";
import {zodResolver} from "@hookform/resolvers/zod";
import {AnimatedBtn, Input, RadioLabelledBtn, Select} from "@/components";
import {ITeam, ITeamFormSchema} from "@/types";
import date from "date-and-time";


const TeamForm = ({coaches, submitForm, loading}: {
    coaches: ITeam[],
    loading: boolean,
    submitForm: (_data: ITeamFormSchema) => Promise<{ ok: boolean }>
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
        teamName: z
            .string({required_error: 'Team Name is required!'})
            .min(2, {message: 'Team name must be at least 2 characters long.'}),
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
    const defaultValues: ITeamFormSchema = {
        firstName: '',
        lastName: '',
        email: '',
        coachName: coaches ? coaches[0].name : '',
        teamName: '',
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
        reset
    } = useForm<ITeamFormSchema>({
        defaultValues, resolver: zodResolver(schema)
    })

    const onSubmit = (data: ITeamFormSchema) => {
        data.type = 'team'
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

    console.log(getValues('date'))
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

            <Input label={'Team Name'} error={errors['teamName']} id={'teamName'}
                   {...register('teamName', {required: true})}
                   className={'col-span-2 md:col-span-1'}/>

            <Input label={'Date'} error={errors['date']} id={'date'} type={'date'}
                   {...register('date', {required: true})}
                   className={'col-span-2 md:col-span-1'}/>

            <RadioLabelledBtn
                className={'col-span-2'}
                label={'Our coach helped us as a Team to understand Strengths-based principles'}
                value={getValues('principles')} options={optArr}
                setValue={(_v) => onRadioValueChange(_v, 'principles')}/>

            <RadioLabelledBtn
                className={'col-span-2'}
                label={'Our coach gave individuals on our team a better understanding of their own talents and Strengths'}
                value={getValues('talentStrength')} options={optArr}
                setValue={(_v) => onRadioValueChange(_v, 'talentStrength')}/>

            <RadioLabelledBtn
                className={'col-span-2'}
                label={'Our coach helped us understand and acknowledge the collective Strengths of the team'}
                value={getValues('collectiveStrength')} options={optArr}
                setValue={(_v) => onRadioValueChange(_v, 'collectiveStrength')}/>

            <RadioLabelledBtn
                className={'col-span-2'}
                label={'Our coach helped us as a team to develop a strategy to apply our combined talents ' +
                    'and Strengths towards team goals and performance'}
                value={getValues('collectiveStrength')} options={optArr}
                setValue={(_v) => onRadioValueChange(_v, 'collectiveStrength')}/>

            <Input label={'Are there any additional comments you would like to make?'}
                   error={errors['comments']} id={'comments'} type={'textarea'}
                   {...register('comments')} className={'col-span-2 min-h-[16rem] resize-none'}/>

            <div className={'flex flex-col justify-center items-start col-span-1'}>
                <AnimatedBtn loading={loading} disabled={loading} type={'submit'} text={'Submit'} className={'w-1/2'}/>
            </div>
        </Tab.Panel>
    )
}

export default TeamForm
