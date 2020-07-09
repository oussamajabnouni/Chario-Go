import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import uuidv4 from "uuid/v4";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Scrollbars } from "react-custom-scrollbars";
import { useDrawerDispatch } from "../../context/DrawerContext";
import Uploader from "../../components/Uploader/Uploader";
import Button, { KIND } from "../../components/Button/Button";
import DrawerBox from "../../components/DrawerBox/DrawerBox";
import { Row, Col } from "../../components/FlexBox/FlexBox";
import Input from "../../components/Input/Input";
import { Textarea } from "../../components/Textarea/Textarea";
import Select from "../../components/Select/Select";
import { FormFields, FormLabel } from "../../components/FormFields/FormFields";

import {
  Form,
  DrawerTitleWrapper,
  DrawerTitle,
  FieldDetails,
  ButtonGroup,
} from "../DrawerItems/DrawerItems.style";

const options = [
  { value: "Fast Food", name: "Fast Food", id: "1" },
  { value: "Libanais", name: "Libanais", id: "2" },
  { value: "Makloub", name: "Makloub", id: "3" },
  { value: "Bagette Farcie", name: "Bagette Farcie", id: "4" },
  { value: "Tacos", name: "Tacos", id: "5" },
  { value: "Pizza", name: "Pizza", id: "6" },
  { value: "Kabeb", name: "Kabeb", id: "7" },
];

const GET_VENDORS = gql`
  query getVendors(
    $type: String
    $text: String
    $category: String
    $offset: Int
    $limit: Int
  ) {
    vendors(
      type: $type
      text: $text
      category: $category
      offset: $offset
      limit: $limit
    ) {
      items {
        id
        slug
        type
        categories
        name
        thumbnailUrl
        description
        promotion
        deliveryDetails {
          charge
          minimumOrder
          isFree
        }
      }
      totalCount
      hasMore
    }
  }
`;
const CREATE_VENDOR = gql`
  mutation createVendor($vendor: AddVendorInput!) {
    createVendor(vendor: $vendor) {
      id
      slug
      type
      categories
      name
      thumbnailUrl
      description
      promotion
    }
  }
`;
type Props = any;

const AddRestaurant: React.FC<Props> = (props) => {
  const dispatch = useDrawerDispatch();
  const closeDrawer = useCallback(() => dispatch({ type: "CLOSE_DRAWER" }), [
    dispatch,
  ]);
  const { register, handleSubmit, setValue } = useForm();

  const [tag, setTag] = useState([]);
  const [description, setDescription] = useState("");

  React.useEffect(() => {
    register({ name: "type" });
    register({ name: "categories" });
    register({ name: "image", required: true });
    register({ name: "description" });
  }, [register]);

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setValue("description", value);
    setDescription(value);
  };

  const [createVendor] = useMutation(CREATE_VENDOR, {
    update(cache, { data: { createVendor } }) {
      const { vendors } = cache.readQuery({
        query: GET_VENDORS,
      });

      cache.writeQuery({
        query: GET_VENDORS,
        data: {
          vendors: {
            __typename: vendors.__typename,
            items: [createVendor, ...vendors.items],
            hasMore: true,
            totalCount: vendors.items.length + 1,
          },
        },
      });
    },
  });
  const handleMultiChange = ({ value }) => {
    setValue("categories", value);
    setTag(value);
  };

  const handleUploader = (files) => {
    setValue("image", files[0].path);
  };
  const onSubmit = (data) => {
    const newVendor = {
      id: uuidv4(),
      name: data.name,
      type: data.type[0].value,
      description: data.description,
      image: data.image && data.image.length !== 0 ? data.image : "",
      price: Number(data.price),
      unit: data.unit,
      salePrice: Number(data.salePrice),
      discountInPercent: Number(data.discountInPercent),
      quantity: Number(data.quantity),
      slug: data.name,
      creation_date: new Date(),
    };
    console.log(newVendor, "newVendor data");
    createVendor({
      variables: { vendor: newVendor },
    });
    closeDrawer();
  };

  return (
    <>
      <DrawerTitleWrapper>
        <DrawerTitle>Add Restaurant</DrawerTitle>
      </DrawerTitleWrapper>

      <Form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
        <Scrollbars
          autoHide
          renderView={(props) => (
            <div {...props} style={{ ...props.style, overflowX: "hidden" }} />
          )}
          renderTrackHorizontal={(props) => (
            <div
              {...props}
              style={{ display: "none" }}
              className="track-horizontal"
            />
          )}
        >
          <Row>
            <Col lg={4}>
              <FieldDetails>Upload your Restaurant image here</FieldDetails>
            </Col>
            <Col lg={8}>
              <DrawerBox
                overrides={{
                  Block: {
                    style: {
                      width: "100%",
                      height: "auto",
                      padding: "30px",
                      borderRadius: "3px",
                      backgroundColor: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  },
                }}
              >
                <Uploader onChange={handleUploader} />
              </DrawerBox>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <FieldDetails>
                Add your Restaurant description and necessary information from
                here
              </FieldDetails>
            </Col>

            <Col lg={8}>
              <DrawerBox>
                <FormFields>
                  <FormLabel>Restaurant Name</FormLabel>
                  <Input
                    inputRef={register({ required: true, maxLength: 20 })}
                    name="name"
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>thumbnailUrl</FormLabel>
                  <Input type="text" inputRef={register} name="thumbnailUrl" />
                </FormFields>

                <FormFields>
                  <FormLabel>Promotion</FormLabel>
                  <Input type="number" inputRef={register} name="promotion" />
                </FormFields>

                <FormFields>
                  <FormLabel>delivery Details</FormLabel>
                  <Input
                    type="text"
                    inputRef={register({ required: true })}
                    name="deliveryDetails"
                  />
                </FormFields>

                <FormFields>
                  <FormLabel>Categories</FormLabel>
                  <Select
                    options={options}
                    labelKey="name"
                    valueKey="value"
                    placeholder="Restaurant Tag"
                    value={tag}
                    onChange={handleMultiChange}
                    overrides={{
                      Placeholder: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      DropdownListItem: {
                        style: ({ $theme }) => {
                          return {
                            ...$theme.typography.fontBold14,
                            color: $theme.colors.textNormal,
                          };
                        },
                      },
                      Popover: {
                        props: {
                          overrides: {
                            Body: {
                              style: { zIndex: 5 },
                            },
                          },
                        },
                      },
                    }}
                    multi
                  />
                </FormFields>
              </DrawerBox>
            </Col>
          </Row>
        </Scrollbars>

        <ButtonGroup>
          <Button
            kind={KIND.minimal}
            onClick={closeDrawer}
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: "50%",
                  borderTopLeftRadius: "3px",
                  borderTopRightRadius: "3px",
                  borderBottomRightRadius: "3px",
                  borderBottomLeftRadius: "3px",
                  marginRight: "15px",
                  color: $theme.colors.red400,
                }),
              },
            }}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            overrides={{
              BaseButton: {
                style: ({ $theme }) => ({
                  width: "50%",
                  borderTopLeftRadius: "3px",
                  borderTopRightRadius: "3px",
                  borderBottomRightRadius: "3px",
                  borderBottomLeftRadius: "3px",
                }),
              },
            }}
          >
            Create Restaurant
          </Button>
        </ButtonGroup>
      </Form>
    </>
  );
};

export default AddRestaurant;
